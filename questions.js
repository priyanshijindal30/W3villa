let Easy = [
  {
    numb: 1,
    question: "What manages the transmission of outgoing mail?",
    answer: "SMTP",
    options: [
      "FTP Text Preprocessor",
      "SMTP",
      "HTTP",
      "None of the above"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  }
];

let Medium = [
{
  numb: 1,
  question: "What does JSON stand for?",
  answer: "Javascript Object Notation",
  options: [
    "Javascript Object Notation",
    "Javascript Optimal Negotiator",
    "Javasctipt Oriented Neural",
    "Hyper Tool Multi Language"
  ]
},
  {
  numb: 2,
  question: "What is React?",
  answer: "Library",
  options: [
    "Library",
    "Framework",
    "Database",
    "Software"
  ]
},
  {
  numb: 3,
  question: "What does CDN means?",
  answer: "Content Delivery Network",
  options: [
    "Content Delivery Network",
    "Content Database Number",
    "Content Decision Negotiator",
    "Common Decision Name"
  ]
},
  {
  numb: 4,
  question: "HTML is used to...?",
  answer: "Author webpages",
  options: [
    "Plot complicated graphs",
    "Author webpages",
    "Translate one language into another",
    "Solve equations"
  ]
},
  {
  numb: 5,
  question: "ROM stands for..",
  answer: "Read Only Memory",
  options: [
    "Royal Ontario Museum",
    "Read Only Memory",
    "Read on Monday",
    "Real Obsolute Memory"
  ]
}
];

let Hard = [
{
  numb: 1,
  question: "A dual-layer DVD is valued because it:",
  answer: "Can hold more data",
  options: [
    "Can hold more data",
    "Contains a backup of the data stored",
    "Uses a second layer to offer a speed increase",
    "Creates alternative sound tracks"
  ]
},
  {
  numb: 2,
  question: "What are the three main search expressions, or operators, recognized by Boolean logic?",
  answer: "AND, OR, NOT",
  options: [
    "FROM, TO, WHOM",
    "SEARCH, KEYWORD, TEXT",
    "AND, OR, BUT",
    "AND, OR, NOT"
  ]
},
  {
  numb: 3,
  question: "When discussing technology, a hot spot is...",
  answer: "A place served by public wireless access",
  options: [
    "Jargon for an X-rated Web site",
    "A faulty area in the programming code",
    "A small overheated area on a CPU",
    "A place served by public wireless access"
  ]
},
  {
  numb: 4,
  question: "Who invented the World Wide Web?",
  answer: "Tim Bernes Lee",
  options: [
    "Bill Gates",
    "Tim Berns Leer",
    "Alan Tuningr",
    "None of the above"
  ]
},
  {
  numb: 5,
  question: "The main computer that stores the files that can be sent to computers that are networked together is...",
  answer: "File server",
  options: [
    "Clip art",
    "File server",
    "Peripheral",
    "Mother board"
  ]
}
];

// creating an array and passing the number, questions, options, and answers
let questions = [];
function fetchQuestion(difficulty){
  if(difficulty === 'Easy')
    questions = Easy;
  else if(difficulty === 'Medium')
    questions = Medium;
  else
    questions = Hard;
}



