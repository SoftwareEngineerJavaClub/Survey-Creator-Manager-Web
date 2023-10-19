const mockSurveys = [
  {
    _id: "02",
    userID: "user123",
    title: "Sample Survey 02",
    description: "This is another sample survey.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite animal?",
        type: "multiple choice",
        options: ["Dog", "Cat", "Bird"],
      },
      {
        questionID: "q2",
        text: "How often do you exercise?",
        type: "multiple choice",
        options: ["Every day", "A few times a week", "Rarely"],
      },
    ],
    responses: [],
  },
  {
    _id: "03",
    userID: "user123",
    title: "Sample Survey 03",
    description: "Another example survey.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite movie genre?",
        type: "multiple choice",
        options: ["Action", "Comedy", "Drama"],
      },
    ],
    responses: [],
  },
  {
    _id: "04",
    userID: "user123",
    title: "Sample Survey 04",
    description: "Yet another sample survey.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite food?",
        type: "multiple choice",
        options: ["Pizza", "Burger", "Sushi"],
      },
      {
        questionID: "q2",
        text: "How many hours do you sleep per night?",
        type: "multiple choice",
        options: ["Less than 6 hours", "6-8 hours", "More than 8 hours"],
      },
    ],
    responses: [],
  },
  {
    _id: "05",
    userID: "user123",
    title: "Sample Survey 05",
    description: "A fun survey about hobbies.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite hobby?",
        type: "multiple choice",
        options: ["Reading", "Cooking", "Gardening"],
      },
      {
        questionID: "q2",
        text: "Do you enjoy outdoor activities?",
        type: "multiple choice",
        options: ["Yes", "No"],
      },
    ],
    responses: [],
  },
  {
    _id: "06",
    userID: "user123",
    title: "Sample Survey 06",
    description: "A survey about technology usage.",
    questions: [
      {
        questionID: "q1",
        text: "Which smartphone brand do you use?",
        type: "multiple choice",
        options: ["Apple", "Samsung", "Google", "Other"],
      },
      {
        questionID: "q2",
        text: "How many hours a day do you spend on the internet?",
        type: "multiple choice",
        options: [
          "Less than 1 hour",
          "1-3 hours",
          "3-6 hours",
          "More than 6 hours",
        ],
      },
    ],
    responses: [],
  },
  {
    _id: "07",
    userID: "user123",
    title: "Sample Survey 07",
    description: "A survey about travel preferences.",
    questions: [
      {
        questionID: "q1",
        text: "What type of traveler are you?",
        type: "multiple choice",
        options: ["Adventure", "Relaxation", "Cultural"],
      },
      {
        questionID: "q2",
        text: "What's your dream travel destination?",
        type: "multiple choice",
        options: ["Paris", "Bali", "New York", "Other"],
      },
    ],
    responses: [],
  },
  {
    _id: "08",
    userID: "user123",
    title: "Sample Survey 08",
    description: "A survey about music preferences.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite music genre?",
        type: "multiple choice",
        options: ["Pop", "Rock", "Hip-hop", "Jazz", "Classical"],
      },
      {
        questionID: "q2",
        text: "Do you play a musical instrument?",
        type: "multiple choice",
        options: ["Yes", "No"],
      },
    ],
    responses: [],
  },
  {
    _id: "09",
    userID: "user123",
    title: "Sample Survey 09",
    description: "A survey about fitness habits.",
    questions: [
      {
        questionID: "q1",
        text: "How often do you exercise?",
        type: "multiple choice",
        options: ["Every day", "A few times a week", "Rarely"],
      },
      {
        questionID: "q2",
        text: "What's your favorite workout activity?",
        type: "multiple choice",
        options: ["Running", "Yoga", "Weightlifting", "Swimming"],
      },
    ],
    responses: [],
  },
  {
    _id: "10",
    userID: "user123",
    title: "Sample Survey 10",
    description: "A survey about reading habits.",
    questions: [
      {
        questionID: "q1",
        text: "How many books do you read per month?",
        type: "multiple choice",
        options: ["None", "1-2 books", "3-5 books", "More than 5 books"],
      },
      {
        questionID: "q2",
        text: "What's your favorite book genre?",
        type: "multiple choice",
        options: ["Mystery", "Fantasy", "Science Fiction", "Romance"],
      },
    ],
    responses: [],
  },
  {
    _id: "11",
    userID: "user123",
    title: "Sample Survey 11",
    description: "A survey about favorite movies.",
    questions: [
      {
        questionID: "q1",
        text: "What's your all-time favorite movie?",
        type: "multiple choice",
        options: [
          "The Shawshank Redemption",
          "The Godfather",
          "Pulp Fiction",
          "Other",
        ],
      },
      {
        questionID: "q2",
        text: "Do you enjoy watching documentaries?",
        type: "multiple choice",
        options: ["Yes", "No"],
      },
    ],
    responses: [],
  },
  {
    _id: "12",
    userID: "user123",
    title: "Sample Survey 12",
    description: "A survey about your daily routine.",
    questions: [
      {
        questionID: "q1",
        text: "What time do you usually wake up in the morning?",
        type: "multiple choice",
        options: ["Before 6 AM", "6-7 AM", "After 7 AM"],
      },
      {
        questionID: "q2",
        text: "How do you start your day?",
        type: "multiple choice",
        options: ["Exercise", "Coffee", "Breakfast", "Other"],
      },
    ],
    responses: [],
  },
  {
    _id: "13",
    userID: "user123",
    title: "Sample Survey 13",
    description: "A survey about your favorite sports.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite sport to watch?",
        type: "multiple choice",
        options: ["Football", "Basketball", "Tennis", "Other"],
      },
      {
        questionID: "q2",
        text: "Do you play any sports regularly?",
        type: "multiple choice",
        options: ["Yes", "No"],
      },
    ],
    responses: [],
  },
  {
    _id: "14",
    userID: "user123",
    title: "Sample Survey 14",
    description: "A survey about your favorite foods.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite cuisine?",
        type: "multiple choice",
        options: ["Italian", "Mexican", "Chinese", "Other"],
      },
      {
        questionID: "q2",
        text: "Do you have any dietary restrictions?",
        type: "multiple choice",
        options: ["Vegetarian", "Vegan", "Gluten-Free", "None"],
      },
    ],
    responses: [],
  },
  {
    _id: "15",
    userID: "user123",
    title: "Sample Survey 15",
    description: "A survey about your travel experiences.",
    questions: [
      {
        questionID: "q1",
        text: "What's the most memorable place you've visited?",
        type: "multiple choice",
        options: ["Paris", "Bali", "New York", "Other"],
      },
      {
        questionID: "q2",
        text: "Do you prefer solo travel or group travel?",
        type: "multiple choice",
        options: ["Solo", "Group"],
      },
    ],
    responses: [],
  },
  {
    _id: "16",
    userID: "user123",
    title: "Sample Survey 16",
    description: "A survey about your shopping habits.",
    questions: [
      {
        questionID: "q1",
        text: "Where do you prefer to shop for clothes?",
        type: "multiple choice",
        options: ["Mall", "Online", "Thrift Stores", "Other"],
      },
      {
        questionID: "q2",
        text: "How often do you buy new clothes?",
        type: "multiple choice",
        options: ["Weekly", "Monthly", "Rarely"],
      },
    ],
    responses: [],
  },
  {
    _id: "17",
    userID: "user123",
    title: "Sample Survey 17",
    description: "A survey about your favorite TV shows.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite TV show of all time?",
        type: "multiple choice",
        options: ["Game of Thrones", "Breaking Bad", "Friends", "Other"],
      },
      {
        questionID: "q2",
        text: "Do you binge-watch TV series?",
        type: "multiple choice",
        options: ["Yes", "No"],
      },
    ],
    responses: [],
  },
  {
    _id: "18",
    userID: "user123",
    title: "Sample Survey 18",
    description: "A survey about your pet preferences.",
    questions: [
      {
        questionID: "q1",
        text: "Do you own any pets?",
        type: "multiple choice",
        options: ["Yes", "No"],
      },
      {
        questionID: "q2",
        text: "If yes, what type of pets do you have?",
        type: "multiple choice",
        options: ["Dog", "Cat", "Fish", "Other"],
      },
    ],
    responses: [],
  },
  {
    _id: "19",
    userID: "user123",
    title: "Sample Survey 19",
    description: "A survey about your favorite beverages.",
    questions: [
      {
        questionID: "q1",
        text: "What's your favorite type of coffee?",
        type: "multiple choice",
        options: ["Espresso", "Latte", "Cappuccino", "Other"],
      },
      {
        questionID: "q2",
        text: "How often do you drink tea?",
        type: "multiple choice",
        options: ["Daily", "Occasionally", "Rarely"],
      },
    ],
    responses: [],
  },
  {
    _id: "20",
    userID: "user123",
    title: "Sample Survey 20",
    description: "A survey about your favorite board games.",
    questions: [
      {
        questionID: "q1",
        text: "What's your all-time favorite board game?",
        type: "multiple choice",
        options: ["Monopoly", "Chess", "Settlers of Catan", "Other"],
      },
      {
        questionID: "q2",
        text: "Do you enjoy playing card games?",
        type: "multiple choice",
        options: ["Yes", "No"],
      },
    ],
    responses: [],
  },
];

export default mockSurveys;
